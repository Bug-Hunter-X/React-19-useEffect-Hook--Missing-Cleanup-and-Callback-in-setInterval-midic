```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of a callback function within useEffect
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1); 
    }, 1000); 

    // Missing cleanup function to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```