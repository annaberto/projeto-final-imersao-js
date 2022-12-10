const Company = require('../company/Company');
const Candidate = require('../candidate/Candidate');
const Job = require('./Job');

const company1 = new Company('Lojas Poney', 80327841000147, 21989898989, 1);
const candidate1 = new Candidate('Anna', 12889657282, 21989898989, 4);
const job1 = new Job(
  company1,
  'open',
  'Falar da vaguinha aqui',
  'html',
  'paciencia',
  1
);
const job2 = new Job(
  company1,
  'progress',
  'Falar da vaguinha aqui',
  'css',
  'resiliencia',
  2
);

describe('Test Job class', () => {
  test('Check that the instance of the Job class is being made correctly', () => {
    expect(job1 instanceof Job).toBe(true);
  });

  test('Check deleteJob', () => {
    expect(job1.deleteJob(1)).toContain('deleted successfully!');
  });
  test('Check deleteJob when dont have job', () => {
    expect(job1.deleteJob(10)).toBe('Job vacancy not found!');
  });

  test('Check finalizeJob', () => {
    expect(job1.finalizeJob(candidate1, company1)).toContain(
      'Vacancy closed successfully, the selected candidate was'
    );
  });
  test('Check updateStatus', () => {
    expect(job1.updateStatus('open')).toBe(
      'The vacancy status has been updated!'
    );
  });

  test('Check updateStatus when the new status is Finished', () => {
    expect(job1.updateStatus('Finished')).toBe(
      'If you want to end the vacancy please use the Finalize Vacancy Job'
    );
  });

  test('Check match Hard Skills when candidate doesnt match', () => {
    candidate1.applicationJob(1, 'html', 'paciencia', 'junior');
    const match = job2.matchHardSkills(candidate1);
    expect(match).toBe('The candidate does not have the desired hard skills');
  });

  test('Check match Hard Skills when candidate has match', () => {
    candidate1.applicationJob(1, 'html', 'paciencia', 'junior');
    const match = job1.matchHardSkills(candidate1);
    expect(match).toBe('Candidate has desired hard skills');
  });

  test('Check match Hard Skills when candidate doesnt match', () => {
    candidate1.applicationJob(1, 'html', 'paciencia', 'junior');
    const match = job2.matchSoftSkills(candidate1);
    expect(match).toBe('The candidate does not have the desired soft skills');
  });

  test('Check match soft skills when candidate has match', () => {
    candidate1.applicationJob(1, 'html', 'paciencia', 'junior');
    const match = job1.matchSoftSkills(candidate1);
    expect(match).toBe('Candidate has desired soft skills');
  });
});
