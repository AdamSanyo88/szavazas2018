// Function to perform D'Hondt calculations
function calculate() {
    const totalSeats = 21;
    const minimumVoteShare = 5;
    
    // Define parties with their respective votes
    const parties = [
        { name: 'Party A', votes: 9000 },
        { name: 'Party B', votes: 6000 },
        { name: 'Party C', votes: 4000 }
        // Add more parties here if needed
    ];

    // Calculate the threshold required to get a seat
    const totalVotes = parties.reduce((total, party) => total + party.votes, 0);
    const threshold = (totalVotes * minimumVoteShare) / 100;

    // Array to store allocated seats for each party
    let allocatedSeats = [];

    // Perform D'Hondt calculations
    for (let i = 1; i <= totalSeats; i++) {
        let maxIndex = -1;
        let maxValue = -1;

        // Calculate the divisor for each party and find the party with the highest value
        for (let j = 0; j < parties.length; j++) {
            const divisor = i;
            const value = parties[j].votes / divisor;

            if (value > maxValue && parties[j].votes >= threshold) {
                maxValue = value;
                maxIndex = j;
            }
        }

        // Allocate a seat to the party with the highest value
        if (maxIndex !== -1) {
            allocatedSeats[maxIndex] = (allocatedSeats[maxIndex] || 0) + 1;
        }
    }

    // Display the result
    displayResult(parties, allocatedSeats);
}

// Function to display the result
function displayResult(parties, allocatedSeats) {
    let result = '<strong>Seat Allocation:</strong><br>';
    for (let i = 0; i < parties.length; i++) {
        const partyName = parties[i].name;
        const seats = allocatedSeats[i] || 0;
        result += `${partyName}: ${seats} seats<br>`;
    }
    document.getElementById('result').innerHTML = result;
}