export default function App() {
  const env = import.meta.env;
  console.log(env);
  return (
    <>
      <h1>Hello from your App {env.VITE_token}</h1>
      <h3>my special : {env.VITE_pub}</h3>
    </>
  );
}
