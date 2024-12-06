self.onmessage = async (event) => {
  const { code } = event.data;
  try {
    const result = await eval(`(async () => { ${code} })()`);
    postMessage({ success: true, result });
  } catch (error) {
    postMessage({ success: false, error: error.message });
  }
};

