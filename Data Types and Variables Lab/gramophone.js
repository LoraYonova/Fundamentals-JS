function solve(bandName, albumName, songName) {

    let rotated = (albumName.length * bandName.length) * songName.length / 2;
    console.log(`The plate was rotated ${Math.ceil(rotated / 2.5)} times.`);
}

solve('Black Sabbath', 'Paranoid', 'War Pigs');
solve('Rammstein', 'Sehnsucht', 'Engel');