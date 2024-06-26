// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  return [...new Set(playlist)];
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  return new Set(playlist).has(track);
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  // add() returns the set
  return [...new Set(playlist).add(track)];
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  // cannot one-line because delete() returns a boolean
  const playlistSet = new Set(playlist);
  playlistSet.delete(track);
  return [...playlistSet];
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  // - this implementation only iterates through the playlist once (when adding to the set)
  // - an alternative (one-liner) implementation would be to map the playlist to the artist
  //   and then convert it to a set but that would iterate through the playlist twice
  //    (once for mapping and once for converting to a set)
  // - the one-liner implementation would be:
  //      return [...new Set(playlist.map((song) => song.split("- ")[1]))];

  const artistSet = new Set();

  playlist.forEach((song) => {
    artistSet.add(song.split("- ")[1]);
  });

  return [...artistSet];
}
