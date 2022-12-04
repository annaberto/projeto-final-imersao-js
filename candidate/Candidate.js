const Person = require("../person/Person");
const JobVacancy = require("../job-vacancy/JobVacancy");

class Candidate extends Person {
  hardSkills;
  softSkills;
  level;
  id;
  jobsApplied = [];
  jobsSaved = [];
  jobVacancy;

  constructor(name, cpfOrCnpj, contact, hardSkills, softSkills, level, id) {
    super(name, cpfOrCnpj, contact);
    this.candidateName = name;
    this.hardSkills = hardSkills;
    this.softSkills = softSkills;
    this.level = level;
    this.id = Math.floor(Math.random() * 50 + 1);
  }

  applicationJob(jobVacancy, hardSkills, softSkills, level) {
    if (jobVacancy instanceof JobVacancy) {
      if (this.jobsApplied.indexOf(jobVacancy.JobVacancyId) === -1) {
        jobVacancy.candidates.push(this.name);
        this.jobsApplied.push(jobVacancy.JobVacancyId);
        this.hardSkills = hardSkills;
        this.softSkills = softSkills;
        this.level = level;

        return "Successfully Registered Candidate!";
      } else {
        return "You are already registered for this vacancy!";
      }
    } else {
      return "Job not found!";
    }
  }

  removeApplicationJob(jobVacancy) {
    if (jobVacancy instanceof JobVacancy) {
      if (this.jobsApplied.indexOf(jobVacancy.JobVacancyId) > -1) {
        this.jobsApplied = this.jobsApplied.filter(
          (e) => e != jobVacancy.JobVacancyId
        );
        jobVacancy.candidates = jobVacancy.candidates.filter(
          (e) => e != this.name
        );
        return `Application with code ${jobVacancy.JobVacancyId} deleted successfully!`;
      } else {
        console.log("You are not registered for this vacancy!");
      }
    } else {
      console.log("Job not found!");
    }
  }
  getApplications() {
    return `You applied for jobs with code: ${this.jobsApplied}`;
  }
  saveJob(jobVacancy) {
    if (jobVacancy instanceof JobVacancy) {
      if (this.jobsSaved.indexOf(jobVacancy.JobVacancyId) === -1) {
        this.jobsSaved.push(jobVacancy.JobVacancyId);
        console.log(
          `Vacancy with code ${jobVacancy.JobVacancyId} successfully saved!`
        );
      } else {
        console.log("You have saved this vacancy before.");
      }
    } else {
      console.log("Job not found!");
    }
  }
}
module.exports = Candidate;
