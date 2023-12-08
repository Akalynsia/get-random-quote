const FetchQuote = async () => {
  try {
    const response = await fetch("https://type.fit/api/quotes");
    const data = response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};

export default FetchQuote;
