const Company = require('../company/Company');
const Candidate = require('../candidate/Candidate');

class Job {
  company;
  status;
  description;
  selectedCandidate = '';
  jobId;
  candidate;
  jobCreated = [];

  constructor(
    company,
    status,
    description,
    hardSkills,
    softSkills,
    jobId,
    jobCreated
  ) {
    if (company instanceof Company) {
      if (this.jobCreated.indexOf(jobId) === -1) {
        this.company = company;
        this.status = status;
        this.description = description;
        this.hardSkills = hardSkills;
        this.softSkills = softSkills;
        this.jobId = jobId;
        this.jobCreated.push(jobId);
        company.amount -= 150;
        console.log('Job vacancy created successfully');
      } else {
        console.log('This Job vacancy already exists');
      }
    } else {
      throw 'It was not possible to perform this operation, company not found.';
    }
  }

  deleteJob(jobId) {
    if (this.jobCreated.indexOf(jobId) > -1) {
      this.jobCreated = this.jobCreated.filter((e) => e != jobId);
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
          company.receivedCashback = company.receivedCashback + 100;
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
}

module.exports = Job;
