const makeDateReadable = (dateString) => {
    return new Date(dateString).toLocaleDateString(window.navigator.language, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  
  export default makeDateReadable;