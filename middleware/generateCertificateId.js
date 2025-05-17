const CertificateCounter = require("../models/CertifiCounter.model");

async function generateCertificateId(completedAt = new Date()) {
  const year = completedAt.getFullYear();

  let counter = await CertificateCounter.findOne({ year });

  if (!counter) {
    counter = await CertificateCounter.create({ year, count: 1 });
  } else {
    counter.count += 1;
    await counter.save();
  }

  const padded = counter.count.toString().padStart(4, '0');
  return `LAWCOACH-${year}-${padded}`;
}

module.exports = generateCertificateId;
