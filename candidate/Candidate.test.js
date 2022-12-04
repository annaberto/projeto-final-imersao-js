const Candidate = require("./Candidate.js");
const JobVacancy = require("../job-vacancy/JobVacancy");
const Company = require("../company/Company");

const empresa1 = new Company("Lojas poney", "6289827819", "219999999", 0, 100);
const job1 = new JobVacancy(empresa1, "Aqui vc fala sobre vaga", "Aberta");

describe("Test Candidate class", () => {
  test("Check that the instance of the Candidate class is being made correctly", () => {
    const candidate1 = new Candidate();
    expect(candidate1 instanceof Candidate).toBe(true);
  });
  test("Check that applicationJob", () => {
    const candidate1 = new Candidate();
    expect(candidate1 instanceof Candidate).toBe(true);
    expect(
      candidate1.applicationJob(job1, "html, js", "paciencia", "senior")
    ).toBe("Successfully Registered Candidate!");
  });
  test("Check that applicationJob when already registered", () => {
    const candidate1 = new Candidate();
    candidate1.applicationJob(job1, "html, js", "paciencia", "senior");
    expect(
      candidate1.applicationJob(job1, "html, js", "paciencia", "senior")
    ).toBe("You are already registered for this vacancy!");
  });
  test("Check that removeApplication job", () => {
    const candidate1 = new Candidate();
    candidate1.applicationJob(job1, "html, js", "paciencia", "senior");
    expect(
      candidate1.removeApplicationJob(job1, "html, js", "paciencia", "senior")
    ).toContain("deleted successfully!");
  });
  test("Check that getApplications", () => {
    const candidate1 = new Candidate();
    candidate1.applicationJob(job1, "html, js", "paciencia", "senior");
    expect(candidate1.getApplications()).toContain(
      "You applied for jobs with code:"
    );
  });
});
