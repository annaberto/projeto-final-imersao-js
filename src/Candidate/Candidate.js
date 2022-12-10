const Person = require('../Person/Person');

class Candidate extends Person {
  jobsApplied = [];
  jobsSaved = [];
  job;

  constructor(name, cpfOrCnpj, contact, id) {
    super(name, cpfOrCnpj, contact);
    this.id = id;
    Person.list.candidate.push(this);
    console.log('Candidate created successfully!');
  }

  applicationJob(jobId, hardSkills, softSkills, level) {
    if (this.jobsApplied.indexOf(jobId) === -1) {
      this.jobsApplied.push(jobId);
      this.hardSkills = hardSkills;
      this.softSkills = softSkills;
      this.level = level;

      return 'Successfully Registered Candidate!';
    } else {
      return 'You are already registered for this vacancy!';
    }
  }

  removeApplicationJob(jobId) {
    if (this.jobsApplied.indexOf(jobId) > -1) {
      this.jobsApplied = this.jobsApplied.filter((e) => e != jobId);
      return `Application with code ${jobId} deleted successfully!`;
    } else {
      return 'You are not registered for this Job vacancy!';
    }
  }

  getApplications() {
    return `You applied for jobs with code: ${this.jobsApplied}`;
  }

  saveJob(jobId) {
    if (this.jobsSaved.indexOf(jobId) === -1) {
      this.jobsSaved.push(jobId);
      return `Vacancy with code ${jobId} successfully saved!`;
    } else {
      return 'You have saved this vacancy before.';
    }
  }

  getJobsSaved() {
    return `You have jobs saved:${this.jobsSaved}`;
  }
}

module.exports = Candidate;
