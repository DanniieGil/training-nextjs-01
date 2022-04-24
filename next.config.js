module.exports = {
  async rewrites() {
    return [
      {
        source: "/personaje/:characterId",
        destination: "/character-detail/:characterId",
      },
    ];
  }
}