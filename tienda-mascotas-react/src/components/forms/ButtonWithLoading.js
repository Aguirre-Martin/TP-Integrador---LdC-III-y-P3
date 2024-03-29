import { Button, Spinner } from "react-bootstrap";

export default function ButtonWithLoading({ variant, type, loading, text }) {
  return (
    <Button variant={variant || "primary"} type={type || "submit"} disabled={loading} style={{ marginTop: "10px" }}>
      {loading && <Spinner animation="border" variant="light" size="sm" />}
      {text || "BOTON"}
    </Button>
  );
}
