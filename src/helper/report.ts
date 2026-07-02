const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "test-results",
  reportPath: "test-report",
  reportName: "Playwright BDD Report",
  pageTitle: "Playwright Cucumber Report",
  displayDuration: true,
  openReportInBrowser: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "118",
    },
device: "haritha - Machine",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "Book Cart Project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "Smoke-1" },      ],    },  });

