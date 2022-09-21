function textProcessor()
{
    var rawInput = document.getElementById('entry').value;
    var input = rawInput.replace(/ /g,"");
    var likeNames = likes(input.split(','));
    document.getElementById('result').innerHTML = likeNames;
    return;
}

function likes(names)
{
    names = names || [];
    if (names[0] == '')
        names.length = 0;
    switch (names.length) 
    {
        case 0: 
            {
                return 'no one likes this';
            }
        case 1:
            {
                return names[0] + ' likes this';
            }
        case 2:
            {
                return names[0] + ' and ' + names[1] + ' like this';
            }
        case 3:
            {
                return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
            }
        default:
            {
                return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
            }
    }
}