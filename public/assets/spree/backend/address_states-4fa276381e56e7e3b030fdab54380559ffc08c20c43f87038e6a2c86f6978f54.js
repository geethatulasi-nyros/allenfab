function update_state(e,a){"use strict";var t=$("span#"+e+"country .select2").select2("val"),n=$("span#"+e+"state select.select2"),c=$("span#"+e+"state input.state_name");$.get(Spree.routes.states_search+"?country_id="+t,function(e){var t=e.states;if(0<t.length){n.html("");var s=[{name:"",id:""}].concat(t);$.each(s,function(e,t){var s=$(document.createElement("option")).prop("value",t.id).html(t.name);n.append(s)}),n.prop("disabled",!1).show(),n.select2(),c.hide().prop("disabled",!0)}else c.prop("disabled",!1).show(),n.select2("destroy").hide();a&&a()})}