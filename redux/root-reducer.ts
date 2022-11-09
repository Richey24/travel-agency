import { combineReducers } from "redux";
import alertReducer from "./alert/alertReducer";
// import { SignInUserReducer } from "./user/userReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const signInPersistConfig = {
    key: "SignInUserReducerConfig",
    storage: storage,
    blacklist: ["isLoggingIn"],
};

const CoursesReducerPersistConfig = {
    key: "CoursesReducerConfig",
    storage: storage,
    blacklist: ["isGettingCourses", "isGotCoursesFail"],
};
const GlossaryReducerPersistConfig = {
    key: "GlossaryReducerConfig",
    storage: storage,
    blacklist: ["isGettingGlossary", "isGotGlossaryFail"],
};
const RandomReducerPersistConfig = {
    key: "randomReducerConfig",
    storage: storage,
    blacklist: ["isloading"],
};
const CreateCourseReducerPersistConfig = {
    key: "CoursesReducerConfig",
    storage: storage,
    blacklist: ["isCreatingCourse", "isCreatedCourseFail"],
};

export default combineReducers({
    alertReducer,
    // SignInUserReducer: persistReducer(signInPersistConfig, SignInUserReducer),
});
