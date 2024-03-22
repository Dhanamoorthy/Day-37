// MongoDB Schema

// Users Collection
const UserSchema = {
    _id: ObjectId,
    name: String,
    email: String,
    role: String, // Student, Mentor, Admin, etc.
    // other user-related fields
  };
  
  // CodeKata Collection
  const CodeKataSchema = {
    _id: ObjectId,
    userId: ObjectId, // reference to User
    problemId: ObjectId, // reference to Problems
    solved: Boolean,
    // other fields related to code kata
  };
  
  // Attendance Collection
  const AttendanceSchema = {
    _id: ObjectId,
    userId: ObjectId, // reference to User
    date: Date,
    present: Boolean,
    // other attendance related fields
  };
  
  // Topics Collection
  const TopicsSchema = {
    _id: ObjectId,
    name: String,
    // other topic related fields
  };
  
  // Tasks Collection
  const TasksSchema = {
    _id: ObjectId,
    userId: ObjectId, // reference to User
    taskId: ObjectId, // reference to Tasks
    submissionDate: Date,
    // other fields related to tasks
  };
  
  // CompanyDrives Collection
  const CompanyDrivesSchema = {
    _id: ObjectId,
    name: String,
    date: Date,
    // other fields related to company drives
  };
  
  // Mentors Collection
  const MentorsSchema = {
    _id: ObjectId,
    name: String,
    mentees: [{ type: ObjectId, ref: 'User' }], // reference to User
    // other mentor related fields
  };
  