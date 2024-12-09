export const generateResources = (skill: string): string => {
  return `## 📚 Recommended Resources

### 🎓 Online Courses
1. "${skill} Fundamentals" on Coursera
2. "Advanced ${skill}" on Udemy
3. "${skill} Masterclass" on edX

### 📖 Essential Books
1. "The Complete Guide to ${skill}"
2. "${skill} in Practice"
3. "Advanced ${skill} Techniques"

### 🎥 Video Tutorials
1. "${skill} for Beginners" YouTube series
2. Interactive workshops on Frontend Masters
3. Practice sessions on Pluralsight`;
};