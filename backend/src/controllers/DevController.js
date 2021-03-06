const axios = require('axios');
const Dev = require('../models/Dev.model');
const parseArrayAsString = require('../utils/parseStringAsArray');

module.exports = {
  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  },
  async store(req, res) {
    const {
      github_username,
      techs,
      latitude,
      longitude
    } = req.body;

    const devExist = await Dev.findOne({
      github_username
    });

    if (devExist) {
      return res.json(devExist);
    }

    const githubResponse = axios.get(`https://api.github.com/users/${github_username}`);

    const {
      name = login, avatar_url, bio
    } = githubResponse.data;

    const techsArray = parseArrayAsString(techs);

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude]
    }

    const dev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: techsArray,
      location
    })
    return res.json(dev);
  },
  async update(req, res) {
    return res.json({
      update: 'ok'
    });
  },
  async destroy(req, res) {
    return res.json({
      destroy: 'ok'
    });
  }
}