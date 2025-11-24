

const Layout = ({ children }) => {
  return (
    <div className="container vh-100 bg-dark text-bg-dark d-flex flex-column align-items-center justify-content-center gap-5">
      {children}
    </div>
  );
};

export default Layout;