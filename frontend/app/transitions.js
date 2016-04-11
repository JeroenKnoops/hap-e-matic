export default function(){
  this.transition(
    this.fromRoute('overview'),
    this.toRoute('happiness'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
};
