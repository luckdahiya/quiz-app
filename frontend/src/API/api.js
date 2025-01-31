export const fetchQuizData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/quiz-data");
      if (!response.ok) {
        throw new Error("Failed to fetch quiz data");
      }
      const data = await response.json();
      console.log("API Response:", data); 
      return data;
    } catch (error) {
      console.error("Error fetching quiz data:", error);
      throw error;
    }
  };
  