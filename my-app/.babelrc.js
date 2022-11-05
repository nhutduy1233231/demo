const plugins = [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ["./src/"],
        alias: {
            "~": "./src"
        }
      }
  
    ]
  ];