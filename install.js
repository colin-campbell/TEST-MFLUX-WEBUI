module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone -b fix-guidance-and-premature-var-deletion https://github.com/colin-campbell/MFLUX-WEBUI.git app",
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "pip install -r requirements.txt"
        ]
      }
    },
    {
      method: "fs.link",
      params: {
        venv: "app/env"
      }
    }
  ]
}
