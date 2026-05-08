let colleges = [
  {
    id: 1,
    name: "IIT Delhi",
    location: "Delhi",
    fees: 200000,
    rating: 4.8
  },
  {
    id: 2,
    name: "NIT Trichy",
    location: "Tamil Nadu",
    fees: 150000,
    rating: 4.5
  }
];

exports.getColleges = (req, res) => {
  res.json(colleges);
};

exports.getCollegeById = (req, res) => {
  const id = Number(req.params.id);
  const college = colleges.find(c => c.id === id);

  if (!college) {
    return res.status(404).json({ error: "College not found" });
  }

  res.json(college);
};