const ErrorPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <a href="/pizza-delivery/">Go to Home</a>
      </div>
    </div>
  );
};

export default ErrorPage;