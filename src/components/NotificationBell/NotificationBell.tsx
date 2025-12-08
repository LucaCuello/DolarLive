import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Check } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { notifications, Notification } from "@/data/notifications";
import {
  getReadNotifications,
  markNotificationRead,
  markAllNotificationsRead,
} from "@/utils/utils";

export const NotificationBell = () => {
  const [readIds, setReadIds] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setReadIds(getReadNotifications());
  }, []);

  const unreadCount = notifications.filter((n) => !readIds.includes(n.id)).length;

  const handleMarkAsRead = (id: string) => {
    markNotificationRead(id);
    setReadIds((prev) => [...prev, id]);
  };

  const handleMarkAllAsRead = () => {
    const allIds = notifications.map((n) => n.id);
    markAllNotificationsRead(allIds);
    setReadIds(allIds);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="relative p-1.5 rounded-lg hover:bg-muted transition-colors"
          aria-label="Notificaciones"
        >
          <Bell size={14} className="text-muted-foreground" />
          <AnimatePresence>
            {unreadCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center"
              >
                {unreadCount}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        sideOffset={8}
        className="w-72 p-0 rounded-xl border-border/60"
      >
        <div className="flex items-center justify-between px-3 py-2 border-b border-border/60">
          <span className="text-xs font-semibold text-foreground">Novedades</span>
          {unreadCount > 0 && (
            <button
              onClick={handleMarkAllAsRead}
              className="text-[10px] text-muted-foreground hover:text-foreground transition-colors"
            >
              Marcar todas como leídas
            </button>
          )}
        </div>
        <div className="max-h-[280px] overflow-y-auto">
          {notifications.map((notification, index) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
              isRead={readIds.includes(notification.id)}
              onMarkAsRead={handleMarkAsRead}
              index={index}
            />
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

interface NotificationItemProps {
  notification: Notification;
  isRead: boolean;
  onMarkAsRead: (id: string) => void;
  index: number;
}

const NotificationItem = ({
  notification,
  isRead,
  onMarkAsRead,
  index,
}: NotificationItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay: index * 0.03 }}
      onClick={() => !isRead && onMarkAsRead(notification.id)}
      className={`
        flex items-start gap-2 px-3 py-2.5 border-b border-border/40 last:border-0
        transition-colors cursor-pointer
        ${isRead ? "bg-transparent" : "bg-muted/30 hover:bg-muted/50"}
      `}
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          {!isRead && (
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
          )}
          <span className={`text-xs font-medium truncate ${isRead ? "text-muted-foreground" : "text-foreground"}`}>
            {notification.title}
          </span>
        </div>
        <p className={`text-[10px] mt-0.5 line-clamp-2 ${isRead ? "text-muted-foreground/70" : "text-muted-foreground"}`}>
          {notification.description}
        </p>
      </div>
      {isRead && (
        <Check size={12} className="text-muted-foreground/50 flex-shrink-0 mt-0.5" />
      )}
    </motion.div>
  );
};
