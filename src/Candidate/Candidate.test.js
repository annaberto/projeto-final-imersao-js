const Candidate = require('./Candidate.js');
const candidate1 = new Candidate('Anna', 12889657282, 21989898989, 4);

describe('Test Candidate class', () => {
  test('Check that the instance of the Candidate class is being made correctly', () => {
    expect(candidate1 instanceof Candidate).toBe(true);
  });

  test('Check that applicationJob', () => {
    const application = candidate1.applicationJob(
      1,
      'html',
      'paciencia',
      'senior'
    );
    expect(application).toBe('Successfully Registered Candidate!');
  });

  test('Check that applicationJob when already registered', () => {
    candidate1.applicationJob(1, 'html', 'paciencia', 'senior');
    expect(candidate1.applicationJob(1, 'html', 'paciencia', 'senior')).toBe(
      'You are already registered for this vacancy!'
    );
  });

  test('Check that removeApplication job', () => {
    candidate1.applicationJob(1, 'html', 'paciencia', 'senior');
    expect(
      candidate1.removeApplicationJob(1, 'html, js', 'paciencia', 'senior')
    ).toContain('deleted successfully!');
  });

  test('Check that getApplications', () => {
    candidate1.applicationJob(1, 'html', 'paciencia', 'senior');
    expect(candidate1.getApplications()).toContain(
      'You applied for jobs with code:'
    );
  });

  test('Check that saveJob', () => {
    candidate1.saveJob(1);
    expect(candidate1.saveJob()).toContain('successfully saved');
  });

  test('Check that getJobsSaved', () => {
    candidate1.saveJob(1);
    expect(candidate1.getJobsSaved()).toContain('You have jobs saved:1');
  });
});
