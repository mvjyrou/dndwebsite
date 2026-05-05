
$(function() {
	$(".tooltipster").tooltipster({
		trigger: "click"
	});
});

function toggleMenu() {
	const sidebar = document.querySelector('.sidebar');
	sidebar.classList.toggle('active');
}
// Авто-закрытие при клике на ссылки
document.querySelectorAll('.sidebar a,').forEach(link => {
	link.addEventListener('click', () => {
		const sidebar = document.querySelector('.sidebar');
		// Убираем активный класс, чтобы меню уехало назад
		sidebar.classList.remove('active');
	});
});

const isPWA = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
if ('serviceWorker' in navigator) {
	if (isPWA) {
		// РЕЖИМ ПРИЛОЖЕНИЯ: Регистрируем и следим за обновлениями
		window.addEventListener('load', () => {
			navigator.serviceWorker.register('/dndwebsite/sw.js').then(reg => {
				console.log('PWA активен');
				
				reg.addEventListener('updatefound', () => {
					const newWorker = reg.installing;
					newWorker.addEventListener('statechange', () => {
						if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
							if (confirm('Доступна новая версия! Обновить?')) {
								newWorker.postMessage({ type: 'SKIP_WAITING' });
								window.location.reload();
							}
						}
					});
				});
			});
		});
	}
	else {
		// РЕЖИМ БРАУЗЕРА: Удаляем SW, чтобы не занимать место кэшем
		navigator.serviceWorker.getRegistrations().then(registrations => {
			for (let registration of registrations) {
				registration.unregister();
			}
		});
	}
}
