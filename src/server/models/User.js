const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} is not a valid email"
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  tokens: [
    {
      access: {
        type: String,
        required: true
      },
      token: {
        type: String,
        require: true
      }
    }
  ]
});

UserSchema.methods.toJSON = function() {
  const { id, email } = this.toObject();

  return {
    id,
    email
  };
};

UserSchema.methods.generateAuthToken = function() {
  const user = this;
  let { id } = user;
  const access = "auth";

  const token = jwt.sign({ id, access, "foo":"bar" }, process.env.JWT_SECRET).toString();

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log(decoded);

  user.tokens = user.tokens.concat([{ access, token }]);

  return user.save().then(() => {
    return token;
  })
};

UserSchema.methods.removeToken = function(token) {
  const user = this;

  return user.updateOne({
    $pull: {
      tokens: {
        token
      }
    }
  });
};

UserSchema.statics.findByToken = function(token) {
  const user = this;
  let decoded = undefined;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return Promise.reject();
  }

  return user.findOne({
    _id: decoded.id,
    "tokens.token": token,
    "tokens.access": "auth"
  });
};

UserSchema.statics.findByCredentials = function(email, password) {
  const user = this;

  return user.findOne({ email }).then(user => {
    if (!user) {
      return Promise.reject();
    }

    return bcrypt.compare(password, user.password).then((result, err) => {
      if (err || !result) {
        return Promise.reject(err);
      }
      return user;
    });
  });
};

UserSchema.pre("save", function(next) {
  const user = this;

  if (user.isModified("password")) {
    bcrypt.hash(user.password, 10).then((hash, err) => {
      user.password = hash;
      next();
    });
  } else {
    next();
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = {
  User
};
