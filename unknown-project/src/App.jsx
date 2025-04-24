
function App() {
 
  return (
    <>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Frontpage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </>
  );
}

export default App;