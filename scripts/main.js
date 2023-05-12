var rgbhex = "";
var msg = "";
const hexref = ["f", "f", "f", "f", "f", "f", "f", "8", "f", "f", "f", "f", "f", "f", "f", "f"];

Events.on(EventType.ClientLoadEvent, cons(load => {
    Vars.ui.hudGroup.fill(cons(table => {
        table.button(Icon.admin, Styles.cleari, run(() => {
        
        generate_and_send();
        
        })).width(50).height(50).name("admin button");
        
        table.top().marginLeft(700);
    }));
}));

function generate_and_send() {
    msg = "";
    for(let i=0; i<Mathf.ceil(Mathf.random() * 16); i++) {
       rgbhex = "[#";
       for(let k=0; k<2; k++) {
          rgbhex+=hexref[Mathf.floor(Mathf.random() * 16)];
       };
    let rand = Mathf.ceil(Mathf.random()*1000);
    msg+=rgbhex + "]" + ((rand == 1) ? "SCREAM": "AAA");
    };
    Call.sendChatMessage(msg);
};
