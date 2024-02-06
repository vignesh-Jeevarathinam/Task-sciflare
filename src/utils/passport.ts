import passport from 'passport';
import LocalStrategy from 'passport-local';
import UserModel from '../models/user';
import bcryptjs from 'bcryptjs';


passport.use(new LocalStrategy(
  async (username, password, done) => {      
    try {      
      const user = await UserModel.findOne({ username: username });
      if (!user) {
        return done(null, false, { message: "User Doesn't Exist" });
      }
      if (!bcryptjs.compareSync(password, user.password)) {
        return done(null, false, { message: 'Invalid email or password' });
      }
      return done(null, user);
    } catch (err) {        
      return done(err);
    }
  }
));

  // Serialize user for session storage
  passport.serializeUser((user: any, done) => {
    console.log('user :::', user.id);
    done(null, user.id);
  });


  // Deserialize user from session storage
  passport.deserializeUser(async (id: number | string, done) => {
    try {
      let user = await UserModel.findById(id);
      console.log('user data ::', user);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });

 
