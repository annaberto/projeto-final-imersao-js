const Company = require('../Company/Company');
const Candidate = require('../Candidate/Candidate');

class Job {
  company;
  status;
  description;
  selectedCandidate = '';
  jobId;
  candidate;

  constructor(company, status, description, hardSkills, softSkills, jobId) {
    if (company instanceof Company) {
      if (Job.jobCreated.indexOf(jobId) === -1) {
        this.company = company;
        this.status = status;
        this.description = description;
        this.hardSkills = hardSkills;
        this.softSkills = softSkills;
        this.jobId = jobId;
        this.constructor.jobCreated.push(this.jobId);
        company.amount -= 50;
        console.log('Job vacancy created successfully');
      } else {
        console.log('This Job vacancy already exists');
      }
    } else {
      throw 'It was not possible to perform this operation, company not found.';
    }
  }

  deleteJob(jobId) {
    if (Job.jobCreated.indexOf(jobId) > -1) {
      return `Job Vacancy with code ${jobId} deleted successfully!`;
    } else {
      return 'Job vacancy not found!';
    }
  }

  finalizeJob(candidate, company) {
    if (candidate instanceof Candidate) {
      if (company instanceof Company) {
        this.status = 'Finished';
        if (candidate.level == 'junior') {
          company.receivedCashback += 30;
        }
        return `Vacancy closed successfully, the selected candidate was ${candidate.name}`;
      } else {
        return 'Company not found';
      }
    } else {
      return 'Candidate not found';
    }
  }

  updateStatus(newStatus) {
    if (newStatus != 'Finished') {
      this.status = newStatus;
      return 'The vacancy status has been updated!';
    } else {
      return 'If you want to end the vacancy please use the Finalize Vacancy Job';
    }
  }

  matchHardSkills(candidate) {
    if (candidate instanceof Candidate) {
      if (this.hardSkills === candidate.hardSkills) {
        return `Candidate has desired hard skills`;
      } else {
        return `The candidate does not have the desired hard skills`;
      }
    }
  }
  matchSoftSkills(candidate) {
    if (candidate instanceof Candidate) {
      if (this.softSkills === candidate.softSkills) {
        return `Candidate has desired soft skills`;
      } else {
        return `The candidate does not have the desired soft skills`;
      }
    }
  }
  static jobCreated = [];
}

module.exports = Job;
