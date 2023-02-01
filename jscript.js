
var tasks = [{task:'running',remark:'done'},
{task:'Going to Bank',remark:'pending'},
{task:'BreakFast',remark:'done'},
{task:'Attend Birthday party',remark:'pending'},];


number();
var len = tasks.length;
var completed_tasks = len - pending_tasks;
function addtask(){
 var t = document.getElementsByClassName('head1')[0].value;
    if(t.trim() === ''){
        alert('please enter the title');
    }else{
        var ts1 = {task:t,remark:'pending'};
        tasks.push(ts1);
    }
  
    return number(); 
}
function number(){
    var len = tasks.length;
    var add = document.getElementsByClassName('head')[0];
    var heading = add.getElementsByTagName('h1')[0];
    heading.innerHTML = "List of todo tasks : " + len;
    return addList();

}
function addList(){
    var list = document.getElementsByTagName('ul')[0];
    var ul = document.createElement('ul');
    list.replaceWith(ul);
    tasks.forEach(ele => {
        var li = document.createElement('li');
        var p = document.createElement('p');
        var img = document.createElement('img');
        img.src="./right.png";
        if(ele.remark==='done'){
            li.classList.toggle('checked');
        }
        p.innerHTML=ele.task;
        li.appendChild(img);
        li.appendChild(p);
        ul.appendChild(li);
    });
    ul.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            var li = ev.target.closest('li');
          var nodes = Array.from( li.closest('ul').children );
          var index = nodes.indexOf(ev.target.closest('li'));
          if(tasks[index].remark==='pending'){
            tasks[index].remark='done';
          }else{
            tasks[index].remark='pending';
          }
        }
        addList();
      }, false);
    return false;
}
 