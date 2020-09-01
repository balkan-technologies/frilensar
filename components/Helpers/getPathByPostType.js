const getPathByPostType = post => {
  const postType = post.__typename;
  switch (postType) {
    case 'Spectacol':
      return 'spectacole';
    case 'Proiect':
      return 'proiecte';
    default:
      return 'blog';
  }
}

export default getPathByPostType;
