new Vue({
	el: "#app",
	data: {
		title: "Pratice",
		subtitle: "this is a practice",
	},
	methods: {
		clickBtn: function () {
			$(".second").toggle();
		},
	},
	components: {
		datecontrol: {
			data: function () {
				return {
					start: "1/1/20",
					end: "3/1/20",
				};
			},
			template: `
        <div class="container">
          <div class="startDate">
            <input id="sDate" v-model='start' />
          </div>
          <div class="endDate">
            <input id="eDate" v-model= 'end' />
          </div>
        </div>
      `,
			mounted: function () {
				$("#sDate").datepicker();
				$("#eDate").datepicker();
			},
		},
	},
});
