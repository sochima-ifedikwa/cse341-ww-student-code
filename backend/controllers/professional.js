const data = {
    professionalName : "Sochima Ifedikwa",
    base64Image : "iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAYAAAD8PZyKAAAAOXRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjguMCwgaHR0cHM6Ly9tYXRwbG90bGliLm9yZy81sbWrAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAeTUlEQVR4nO3de5QdZZnv8e/PmTNmTNmTNmTNmTNmTNmTNmTNmTNmTNmTNmTNmTNmTNmTNmTNmTNmTNmTNmTNmTNmTNmTNmTNmTNmTP2H8jIuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLq7+H8jIuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLq7+H8jIuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLq7+H8jIuLi4uLq7+H8jIuLgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAGgAAHgAAHgAAHgAAHgAAHgAAHgAAHgAAHgAAHgAAHgAAHgAAHgAAHgAAHgAA ",
    nameLink : {
        firstName : "Sochima",
        url : "https://www.linkedin.com/in/sochima-ifedikwa/"
    }, 
    primaryDescription : "Hello! I'm Sochima Ifedikwa and I am a software Engineering student at BYU-Idaho",
    workDescription1 : "I have experience with Java, JavaScript, HTML, CSS, and Python. I am currently learning C# and .NET.",
    workDescription2 : "I am passionate about building efficient and scalable software solutions that solve real-world problems.",
    linkTitleText : "Connect with me on all Social Media Platforms",
    linkedInLink : {
        text : "LinkedIn",
        link : "https://www.linkedin.com/in/sochima-ifedikwa/"
    },
    githubLink : {
        text : "GitHub",
        link : "https://github.com/sochima-ifedikwa"
    }
};

exports.getData = (req, res) => {
    res.json(data);
}