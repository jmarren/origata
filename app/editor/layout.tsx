

interface EditorLayoutProps {
  grid: React.ReactNode
  canvas: React.ReactNode
}


const EditorLayout = async ({ grid, canvas }: EditorLayoutProps) => {

  return (
    <>
	{ grid }
	{ canvas }
    </>
  );
};

export default EditorLayout;
