# Contributing to Weather Forecast App

We love your input! We want to make contributing to Weather Forecast App as easy and transparent as possible, whether it's:

- 🐛 Reporting a bug
- 💡 Discussing the current state of the code
- 📝 Submitting a fix
- 🎨 Proposing new features
- 📚 Becoming a maintainer

## We Develop with Github

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

## We Use [Github Flow](https://guides.github.com/introduction/flow/index.html)

We use GitHub Flow. So all code changes happen through Pull Requests.

## We Use [Conventional Commits](https://www.conventionalcommits.org/)

We use Conventional Commits for commit messages. This helps with automatic changelog generation.

## Report bugs using Github's [issue tracker](https://github.com/username/weather-app/issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/username/weather-app/issues/new).

## Write bug reports with detail, background, and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can.
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## License

By contributing, you agree that your contributions will be licensed under its MIT License.

## References

This document was adapted from the open-source contribution guidelines for [Facebook's Draft](https://github.com/facebook/draft-js/blob/a9316a723f9e918afde44dea68b5f9f39b7d9b00/CONTRIBUTING.md).

## Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file with your API keys:
   ```
   REACT_APP_WEATHER_API_KEY=your_weather_api_key
   REACT_APP_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
   ```
5. Start the development server:
   ```bash
   npm start
   ```

## Pull Request Process

1. Update the README.md with details of changes to the interface, if applicable.
2. Update the CHANGELOG.md with a note describing your changes.
3. The PR will be merged once you have the sign-off of at least one other developer.

## Code Style

- Use 2 spaces for indentation
- Use meaningful variable and function names
- Add comments for complex logic
- Follow React best practices
- Use functional components with hooks
- Keep components small and focused

## Testing

Before submitting a PR, please ensure:

- [ ] All existing tests pass
- [ ] New tests are added for new functionality
- [ ] Code is tested on different screen sizes
- [ ] API integrations work correctly
- [ ] No console errors or warnings

## Questions?

Feel free to open an issue for any questions you might have!
