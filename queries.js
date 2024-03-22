// JavaScript code to execute the queries

// Connect to MongoDB using mongoose or any other MongoDB driver

// Query 1: Find all the topics and tasks which are taught in the month of October

const topicsAndTasksInOctober = await Topics.find({
    // Assuming you have a field for date in Topics collection
    date: { $gte: new Date('2020-10-01'), $lte: new Date('2020-10-31') }
  }).populate('tasks'); // Assuming there's a reference to tasks in Topics
  
  // Query 2: Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
  
  const companyDrivesInOctober = await CompanyDrives.find({
    date: { $gte: new Date('2020-10-15'), $lte: new Date('2020-10-31') }
  });
  
  // Query 3: Find all the company drives and students who appeared for the placement
  
  const drivesAndStudents = await CompanyDrives.find({}).populate('students');
  
  // Query 4: Find the number of problems solved by the user in codekata
  
  const problemsSolvedByUser = await CodeKata.countDocuments({ userId: user_id, solved: true });
  
  // Query 5: Find all the mentors with more than 15 mentees
  
  const mentorsWithManyMentees = await Mentors.find({
    mentees: { $size: { $gt: 15 } }
  });
  
  // Query 6: Find the number of users who are absent and task is not submitted between 15 oct-2020 and 31-oct-2020
  
  const absentUsersWithUnsubmittedTasks = await Tasks.countDocuments({
    submissionDate: null,
    date: { $gte: new Date('2020-10-15'), $lte: new Date('2020-10-31') }
  });
  