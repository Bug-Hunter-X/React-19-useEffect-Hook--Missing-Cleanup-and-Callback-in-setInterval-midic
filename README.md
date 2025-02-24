# React 19 useEffect Hook Bug: Missing Cleanup and Callback in setInterval

This repository demonstrates a common error when using the `useEffect` hook in React 19, specifically with `setInterval`.  The bug showcases a missing cleanup function and incorrect usage of a callback within the `setInterval`.  The solution provides a corrected version.

## Bug
The original code uses `setInterval` to increment a counter every second, but it fails to include a cleanup function. This can lead to memory leaks and unexpected behavior. Additionally, it doesn't use a callback function, which makes it harder to manage state updates correctly and can lead to unexpected stale closure issues.

## Solution
The solution includes a cleanup function that calls `clearInterval` to stop the interval when the component unmounts, preventing memory leaks. It also correctly uses a callback function with `setCount` to update the state safely.