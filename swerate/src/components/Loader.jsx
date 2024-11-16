import Image from 'next/image';

const Loading = () => {
  return (
    <div style={styles.container}>
      <Image
        src="/images/loader.gif" // Correct path to loader.gif in public/images
        alt="Loading..."
        width={185} // Adjust width as needed
        height={185} // Adjust height as needed
      />
    </div>
  );
};

// Optional styling for centering the loader
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
};

export default Loading;
