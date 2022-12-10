const { Candidate, Company, Job, Person } = require('./classes');

console.log('\n===== criando empresa, candidatos e vagas de trabalho =====\n');

const company1 = new Company('Lojas Poney', 80327841000147, 21989898989, 1);
const candidate1 = new Candidate('Anna', 12889657282, 21989898989, 1, 'junior');
const candidate2 = new Candidate(
  'Raphaela',
  15889657242,
  21989898989,
  2,
  'senior'
);
let job1 = new Job(
  company1,
  'aberta',
  'Falar da vaguinha aqui',
  'html',
  'resiliencia',
  1
);
let job2 = new Job(
  company1,
  'candidaturas encerradas',
  'Falar da vaguinha aqui',
  'react',
  'empatia',
  2
);
console.log('Empresas cadastradas', Person.list.company);
console.log('Candidatos cadastrados', Person.list.candidate);

console.log(
  '\n============ testando funcionalidades candidatos ============\n'
);

candidate1.applicationJob(1, 'html', 'sororidade');
candidate1.applicationJob(1, 'html', 'sororidade');
candidate2.applicationJob(2, 'css', 'sororidade');

candidate2.removeApplicationJob(2);

candidate1.saveJob(1);
candidate1.saveJob(1);
candidate2.saveJob(2);

candidate1.getApplications();
candidate2.getApplications();

candidate1.getJobsSaved();
candidate2.getJobsSaved();

console.log('\n============ testando funcionalidades de Jobs ============\n');

job1.updateStatus('candidaturas encerradas');
console.log(job1.status);
job1.updateStatus('finalizada');
console.log(job1.status);
job1.matchHardSkills(candidate1);
job1.matchSoftSkills(candidate1);

console.log(Job.jobCreated);
job2.deleteJob(2);
console.log(Job.jobCreated);

console.log(company1.amount);

console.log(company1.receivedCashback);
job1.finalizeJob(candidate1, company1);
console.log(company1.receivedCashback);
