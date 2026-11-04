import { Button, Label } from "../components/ui";
export default function NotFound() {
  return (
    <section className="container not-found">
      <Label>404 / Route not found</Label>
      <h1>This page hasn’t been built.</h1>
      <p>Head back to the portfolio or explore the project directory.</p>
      <Button href="/" icon="home">
        Back to Home
      </Button>
    </section>
  );
}
