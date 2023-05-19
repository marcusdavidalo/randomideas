const express = require('express');
const router = express.Router();
const Idea = require('../models/idea');

const ideas = [
  {
    id: 1,
    text: "Growth is painful. Change is painful. But nothing is as painful asstaying stuck somewhere you don't belong",
    tag: 'Agriculture',
    username: 'Superman',
    date: '2017-01-02',
  },
  {
    id: 2,
    text: '“If you have good habits, time becomes your ally. All you need is patience',
    tag: 'Science',
    username: 'Ironman',
    date: '2019-03-05',
  },
  {
    id: 3,
    text: 'Within you is a stillness and a sanctuary to which you can retreat at any time and be yourself',
    tag: 'Physics',
    username: 'Victor Wenbanyama',
    date: '2013-04-08',
  },
];

// Get all ideas
router.get('/', async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.json({ success: true, data: ideas });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

//get a single idea
router.get('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }
  res.json({ success: true, data: idea });
});

//Add an idea
router.post('/', async (req, res) => {
  const idea = new Idea({
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
  });

  try {
    const savedIdea = await idea.save();
    res.json({ success: true, data: savedIdea });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: 'Something Went Wrong' });
  }
});

// Update Idea
router.put('/:id', async (req, res) => {
  try {
    const idea = await Idea.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!idea) {
      return res
        .status(404)
        .json({ success: false, error: 'Resource not found' });
    }

    res.json({ success: true, data: idea });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

// Delete idea
router.delete('/:id', async (req, res) => {
  try {
    const idea = await Idea.findByIdAndDelete(req.params.id);
    if (!idea) {
      return res
        .status(404)
        .json({ success: false, error: 'Resource not found' });
    }
    res.json({ success: true, data: idea });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

module.exports = router;
