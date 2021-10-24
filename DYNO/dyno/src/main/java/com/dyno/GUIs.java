package com.dyno;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.github.stefvanschie.inventoryframework.gui.GuiItem;
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui;
import com.github.stefvanschie.inventoryframework.pane.OutlinePane;
import com.github.stefvanschie.inventoryframework.pane.Pane.Priority;

import org.bukkit.Material;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

import net.md_5.bungee.api.ChatColor;

public class GUIs {
    
    public static ChestGui getMainGUI() throws SQLException {
        ChestGui gui = new ChestGui(3, "Navigator");

        gui.setOnGlobalClick(event -> event.setCancelled(true));

        OutlinePane background = new OutlinePane(0, 0, 9, 3, Priority.LOWEST);
        background.addItem(new GuiItem(new ItemStack(Material.BLACK_STAINED_GLASS_PANE)));
        background.setRepeat(true);

        gui.addPane(background);
                
        OutlinePane navigationPane = new OutlinePane(3, 1, 3, 1);

        ItemStack sword = new ItemStack(Material.ZOMBIE_HEAD);
        ItemMeta swordMeta = sword.getItemMeta();
        swordMeta.setDisplayName(ChatColor.WHITE + "" + ChatColor.UNDERLINE + "Nike:" + ChatColor.RED + " Zombie Quest");
        List<String> zList = new ArrayList<String>();
        zList.add(ChatColor.RED + "- Kill 10 Zombies");
        zList.add(ChatColor.GOLD + "- Get 100 CartCash");
        swordMeta.setLore(zList);
        sword.setItemMeta(swordMeta);

        Connection conn = DB.getConn();
        Statement s = conn.createStatement();
        
        navigationPane.addItem(new GuiItem(sword, event -> {
            String req = "UPDATE users SET curr_quest = 1 WHERE uuid='" + event.getWhoClicked().getUniqueId() + "'";
            try {
                s.execute(req);
                QuestManager.questUpdate(event.getWhoClicked().getUniqueId());
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }));

        ItemStack carrot = new ItemStack(Material.CARROT);
        ItemMeta carrotMeta = carrot.getItemMeta();
        carrotMeta.setDisplayName(ChatColor.GREEN + "" + ChatColor.UNDERLINE + "Publix:" + ChatColor.GREEN + " Carrot Harvest");
        List<String> cList = new ArrayList<String>();
        cList.add(ChatColor.DARK_GREEN + "- Harvest 5 Carrots");
        cList.add(ChatColor.GOLD + "- Get 100 CartCash");
        carrotMeta.setLore(cList);
        carrot.setItemMeta(carrotMeta);

        navigationPane.addItem(new GuiItem(carrot, event -> {
            String req = "UPDATE users SET curr_quest = 2 WHERE uuid='" + event.getWhoClicked().getUniqueId() + "'";
            try {
                s.execute(req);
                QuestManager.questUpdate(event.getWhoClicked().getUniqueId());
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }));

        ItemStack bow = new ItemStack(Material.BOW);
        ItemMeta bowMeta = bow.getItemMeta();
        bowMeta.setDisplayName(ChatColor.WHITE + "" + ChatColor.UNDERLINE + "Nike:" + ChatColor.RED + " Shoot Your Shot");
        List<String> bList = new ArrayList<String>();
        bList.add(ChatColor.RED + "- Shoot 10 Skeletons");
        bList.add(ChatColor.GOLD + "- Get 100 CartCash");
        bowMeta.setLore(bList);
        bow.setItemMeta(bowMeta);

        navigationPane.addItem(new GuiItem(bow, event -> {
            String req = "UPDATE users SET curr_quest = 3 WHERE uuid='" + event.getWhoClicked().getUniqueId() + "'";
            try {
                s.execute(req);
                QuestManager.questUpdate(event.getWhoClicked().getUniqueId());
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }));

        gui.addPane(navigationPane);
        return gui;
    }
}
