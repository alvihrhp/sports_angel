$(document).ready(function(){
    let date = '2020-01-18'
    let league_id = localStorage.getItem('league_id')

    // FUNCTION
    function showAllLeagues(){
        console.log('Masuk gan')
        $.ajax({
            url: 'http://localhost:3000/football',
            type: 'get',
            dataType: 'json',
            success: function(results){
                results.forEach(el => {
                    $('#all-leagues').append(
                        `
                        <div class="card w-100" style="margin-bottom: 10px;">
                            <img class="card-img-top" src="${el.logo}" alt="Card image cap" width="200" height:"100">
                            <div class="card-body">
                              <h5 class="card-title" style="color: black;">${el.name}</h5>
                              <p class="card-title" style="color: black;">${el.country}</p>
                              <a href="#" class="btn btn-primary check-league" data-league="${el.league_id}" data-toggle="modal" data-target=".modal-league">Check</a>
                            </div>
                        </div>
                        `
                    )
                })
            }
            
        })
    }

    function showStandings(league_id){
        $.ajax({
            url: 'http://localhost:3000/football/standings/'+league_id,
            type: 'get',
            dataType: 'json',
            success: function(results){
                // console.log(results)
                results.forEach(el => {
                    $('#table-standings').append(
                        $('#table-standings').append(
                            `
                            <tbody>
                                <tr>
                                    <td>${el.rank}</td>
                                    <td><img src="${el.logo}" width="20" height="20"></td>
                                    <td>${el.teamName}</td>
                                    <td>${el.all.matchsPlayed}</td>
                                    <td>${el.all.win}</td>
                                    <td>${el.all.draw}</td>
                                    <td>${el.all.lose}</td>
                                    <td>${el.all.goalsFor}</td>
                                    <td>${el.all.goalsAgainst}</td>
                                    <td>${el.goalsDiff}</td>
                                    <td><B>${el.points}</b></td>
                                </tr>
                            </tbody>
                            `
                        )
                    )
                })
            }
        })
    }

    function showSchedule(league_id,date){
        console.log('Schedule masuk gan')
        $.ajax({
            url: 'http://localhost:3000/football/schedule/'+league_id+'/'+date,
            type: 'get',
            dataType: 'json',
            success: function(results){
                console.log(results)
                if(results.length == 0){
                    $('#schedule-result').append(
                        `
                        <h2> there are no schedule </h2>
                        `
                    )
                }
                results.forEach(el => {
                    let homeGoal = 0
                    let awayGoal = 0
                    let date = new Date(el.event_date).toLocaleString()
                    if(el.goalsHomeTeam !== null || el.goalsAwayTeam !== null){
                        homeGoal = el.goalsHomeTeam
                        awayGoal = el.goalsAwayTeam
                    }
                    $('#schedule-result').append(
                        `
                        <div class="col-sm-12" id="card-schedule">
                            <div class="card">
                                <div class="card-body text-center">
                                    <div class="row" style="margin-top: 1vh;">
                                        <div class="col-sm-7">
                                            <h5 class="card-title">
                                                <img src="${el.homeTeam.logo}" width="20" height="20"> ${el.homeTeam.team_name} vs ${el.awayTeam.team_name} <img src="${el.awayTeam.logo}" width="20" height="20">
                                            </h5>
                                            <h3 class="card-text">${homeGoal} v ${awayGoal}</h3>
                                        </div>
                                        <div class="col-sm-5">
                                            <p class="card-text">${date}</p>
                                            <p class="card-text">${el.venue}</p>
                                            <a href="#" class="btn btn-primary">Add Watchlist!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                    )
                })
            }
        })
    }

    function showTopScorers(league_id){
        $.ajax({
            url: 'http://localhost:3000/football/topscorers/'+league_id,
            type: 'get',
            dataType: 'json',
            success: function(results){
                console.log(results)
                results.forEach(el => {
                    $('#topscorer-result').append(
                        `
                        <div class="col-sm-12" id="card-schedule">
                            <div class="card">
                                <div class="card-body text-center">
                                    <div class="row" style="margin-top: 1vh;">
                                        <div class="col-sm-6">
                                            <h3 class="card-title">
                                                ${el.player_name}
                                            </h3>
                                            <p> ${el.nationality} </p>
                                            <h5 class="card-text">${el.team_name}</h5>
                                            <p> ${el.position} </p>
                                        </div>
                                        <div class="col-sm-6">
                                            <h4> Appearences : ${el.games.appearences} </h4>
                                            <h4> Goals : ${el.goals.total}</h4>
                                            <h4> Assists : ${el.goals.assists} </h4>
                                            <h4> Cards : Yellow (${el.cards.yellow}), Red (${el.cards.red}) </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                    )
                })
            }
        })
    }

    function searchByNation(value){
        $.ajax({
            url: 'http://localhost:3000/football',
            type: 'get',
            dataType: 'json',
            success: function(results){
                results.forEach(el => {
                    if(el.country.includes(value)){
                        $('#all-leagues').append(
                            `
                            <div class="card w-100" style="margin-bottom: 10px;">
                                <img class="card-img-top" src="${el.logo}" alt="Card image cap" width="200" height:"100">
                                <div class="card-body">
                                  <h5 class="card-title" style="color: black;">${el.name}</h5>
                                  <p class="card-title" style="color: black;">${el.country}</p>
                                  <a href="#" class="btn btn-primary check-league" data-league="${el.league_id}" data-toggle="modal" data-target=".modal-league">Check</a>
                                </div>
                            </div>
                            `
                        )
                    }else{
                        
                    }
                })
            }
            
        })
    }

    showAllLeagues()
    // showStandings(league_id)

    // $('#standings-tab').on('click', function(event){
    //     showStandings()
    //     event.preventDefault()
    // })

    $(document).on('click','.check-league',function(el){
        localStorage.setItem('league_id', $(this).data('league'))
        league_id = localStorage.getItem('league_id')
        showStandings(league_id)
        el.preventDefault()
    })

    $('#standings-tab').on('click', function(el){
        league_id = localStorage.getItem('league_id')
        $('#table-standings').html('')
        showStandings(league_id)
        el.preventDefault()
    })

    $('#input-date').on('click', function(event){
        date = $('#date-schedule').val()
        $('#schedule-result').html('')
        showSchedule(league_id, date)
        event.preventDefault()
    })

    $('#topscorer-tab').on('click', function(event){
        $('#topscorer-result').html('')
        showTopScorers(league_id)
        event.preventDefault()
    })

    $(document).on('click','#search-league', function(el){
        $('#all-leagues').html('')
        let value = $('#search-val').val()
        searchByNation(value)
        $('#search-val').val('')
        el.preventDefault()
    })
    
})
