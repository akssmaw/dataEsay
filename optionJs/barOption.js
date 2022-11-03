function getBarOptionJsonfunction(echartsName, id) {
	var option;
	console.log(id)

	switch (echartsName) {

		case "Bar_with_Background":
			option = {
				xAxis: {
					type: 'category',
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				},
				yAxis: {
					type: 'value'
				},
				series: [{
					data: [120, 200, 150, 80, 70, 110, 130],
					type: 'bar',
					showBackground: true,
					backgroundStyle: {
						color: 'rgba(180, 180, 180, 0.2)'
					}
				}],
				style: {
					width: '400px',
					height: '250px'
				},
				echartsName: id
			};
			console.log(option)

			break;

		case "Axis_Align_with_Tick":
			option = {
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow'
					}
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: [{
					type: 'category',
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
					axisTick: {
						alignWithLabel: true
					}
				}],
				yAxis: [{
					type: 'value'
				}],
				series: [{
					name: 'Direct',
					type: 'bar',
					barWidth: '60%',
					data: [10, 52, 200, 334, 390, 330, 220]
				}],
				style: {
					width: '400px',
					height: '250px'
				},
				echartsName: id
			};
			console.log(option)

			break;




		case "Set_Style_of_Single_Bar":
			option = {
				xAxis: {
					type: 'category',
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				},
				yAxis: {
					type: 'value'
				},
				series: [{
					data: [
						120,
						{
							value: 200,
							itemStyle: {
								color: '#a90000'
							}
						},
						150,
						80,
						70,
						110,
						130
					],
					type: 'bar'
				}],
				style: {
					width: '400px',
					height: '250px'
				},
				echartsName: id

			};
			console.log(option)

			break;


		case "World_Population":
			option = {
			  title: {
			    text: 'World Population'
			  },
			  tooltip: {
			    trigger: 'axis',
			    axisPointer: {
			      type: 'shadow'
			    }
			  },
			  legend: {},
			  grid: {
			    left: '3%',
			    right: '4%',
			    bottom: '3%',
			    containLabel: true
			  },
			  xAxis: {
			    type: 'value',
			    boundaryGap: [0, 0.01]
			  },
			  yAxis: {
			    type: 'category',
			    data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
			  },
			  series: [
			    {
			      name: '2011',
			      type: 'bar',
			      data: [18203, 23489, 29034, 104970, 131744, 630230]
			    },
			    {
			      name: '2012',
			      type: 'bar',
			      data: [19325, 23438, 31000, 121594, 134141, 681807]
			    }
			  ],
			  style: {
			  	width: '500px',
			  	height: '300px'
			  },
			  echartsName: id
			};
			console.log(option)

			break;





		default:
			option = "66666"
			console.log(option)
			app.$message.error('暂未开发');
			break;

	}

	return option;

}
